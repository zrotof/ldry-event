import { NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { EVENT_TYPES } from '../../../../shared/constants/event-types'

@Component({
  selector: 'app-hero-banner',
  templateUrl: './hero-banner.component.html',
  styleUrl: './hero-banner.component.scss',
  imports: [
    NgOptimizedImage,
    ReactiveFormsModule,
    InputTextModule,
    SelectModule
  ],
})

export class HeroBannerComponent {

  protected readonly eventTypes = EVENT_TYPES;

  private fb = inject(FormBuilder);

  estimateForm !: FormGroup
  isFormSubmitted = false;

 ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.estimateForm = this.fb.group({
      selectedEvent: [null, Validators.required],
      place: [null, Validators.required],
      email: [null, Validators.required],
      phone: [null, Validators.required]
    })
  }
}
