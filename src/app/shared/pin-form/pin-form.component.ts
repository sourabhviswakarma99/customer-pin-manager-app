import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-pin-form',
  templateUrl: './pin-form.component.html',
  styleUrls: ['./pin-form.component.css']
})
export class PinFormComponent implements OnInit {
  
  @ViewChild('fileInput') fileInput!: ElementRef;

  pinForm!: FormGroup;
  collaborators: any[] = [];
  selectedImageBase64: string | null = null;
  dragging = false;

  constructor(private fb: FormBuilder, private customerService: CustomerService, private router: Router) {}

  ngOnInit(): void {
    this.pinForm = this.fb.group({
      title: ['', Validators.required],
      image: [null, Validators.required],
      collaborators: [[], Validators.required],
      privacy: ['private', Validators.required],
    });
    this.loadCollaborators();
  }

  loadCollaborators() {
    this.collaborators = this.customerService.getCustomerData().map(customer => customer.title);
    console.log(this.collaborators);
  }

  onImageChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.convertFileToBase64(file);
    }
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    this.dragging = true;
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault();
    this.dragging = false;
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    this.dragging = false;
    const file = event.dataTransfer?.files[0];
    if (file) {
      this.convertFileToBase64(file);
    }
  }

  triggerFileInput() {
    this.fileInput.nativeElement.click(); 
  }

  convertFileToBase64(file: File) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.selectedImageBase64 = reader.result as string;
      this.pinForm.patchValue({ image: this.selectedImageBase64 });
      this.pinForm.get('image')?.updateValueAndValidity();
    };
  }

  onSubmit() {
    if (this.pinForm.valid) {
      const pinData = {
        title: this.pinForm.get('title')?.value,
        image: this.selectedImageBase64,
        collaborators: this.pinForm.get('collaborators')?.value,
        privacy: this.pinForm.get('privacy')?.value
      };

      this.savePinData(pinData);
      console.log('Pin Form Data:', pinData);
      this.router.navigate(['/pins']);
    }
  }

  savePinData(pinData: any) {
    const existingData = JSON.parse(localStorage.getItem('pinsData') || '[]');
    existingData.push(pinData);
    localStorage.setItem('pinsData', JSON.stringify(existingData));
  }

}
