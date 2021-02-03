import { interval } from 'rxjs';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XTimePickerComponent } from './time-picker.component';
import { Component, DebugElement, ChangeDetectorRef } from '@angular/core';
import { By } from '@angular/platform-browser';
import { XTimePickerModule } from '@ng-nest/ui/time-picker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { XTimePickerPrefix } from './time-picker.property';
import { XLayoutModule } from '@ng-nest/ui/layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { XThemeModule } from '@ng-nest/ui/theme';

describe(XTimePickerPrefix, () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, XThemeModule, XTimePickerModule, FormsModule, ReactiveFormsModule, XLayoutModule],
      declarations: [
        TestXTimePickerComponent,
        TestXTimePickerLabelComponent,
        TestXTimePickerDisabledComponent,
        TestXTimePickerRequiredComponent,
        TestXTimePickerHourOrMinuteComponent
      ]
    }).compileComponents();
  }));
  fdescribe(`default.`, () => {
    let fixture: ComponentFixture<TestXTimePickerComponent>;
    let debugElement: DebugElement;
    beforeEach(() => {
      fixture = TestBed.createComponent(TestXTimePickerComponent);
      fixture.detectChanges();
      debugElement = fixture.debugElement.query(By.directive(XTimePickerComponent));
    });
    it('should create.', () => {
      expect(debugElement).toBeDefined();
    });
  });
  describe(`label.`, () => {
    let fixture: ComponentFixture<TestXTimePickerLabelComponent>;
    let debugElement: DebugElement;
    beforeEach(() => {
      fixture = TestBed.createComponent(TestXTimePickerLabelComponent);
      fixture.detectChanges();
      debugElement = fixture.debugElement.query(By.directive(TestXTimePickerLabelComponent));
    });
    it('should create.', () => {
      expect(debugElement).toBeDefined();
    });
  });
  describe(`disabled.`, () => {
    let fixture: ComponentFixture<TestXTimePickerDisabledComponent>;
    let debugElement: DebugElement;
    beforeEach(() => {
      fixture = TestBed.createComponent(TestXTimePickerDisabledComponent);
      fixture.detectChanges();
      debugElement = fixture.debugElement.query(By.directive(TestXTimePickerDisabledComponent));
    });
    it('should create.', () => {
      expect(debugElement).toBeDefined();
    });
  });
  describe(`required.`, () => {
    let fixture: ComponentFixture<TestXTimePickerRequiredComponent>;
    let debugElement: DebugElement;
    beforeEach(() => {
      fixture = TestBed.createComponent(TestXTimePickerRequiredComponent);
      fixture.detectChanges();
      debugElement = fixture.debugElement.query(By.directive(TestXTimePickerRequiredComponent));
    });
    it('should create.', () => {
      expect(debugElement).toBeDefined();
    });
  });
  describe(`hour or minute.`, () => {
    let fixture: ComponentFixture<TestXTimePickerHourOrMinuteComponent>;
    let debugElement: DebugElement;
    beforeEach(() => {
      fixture = TestBed.createComponent(TestXTimePickerHourOrMinuteComponent);
      fixture.detectChanges();
      debugElement = fixture.debugElement.query(By.directive(TestXTimePickerHourOrMinuteComponent));
    });
    it('should create.', () => {
      expect(debugElement).toBeDefined();
    });
  });
});

@Component({
  template: `
    <x-theme showDark></x-theme>
    <x-row>
      <x-col span="8">
        <x-time-picker [(ngModel)]="model1"></x-time-picker>
      </x-col>
    </x-row>
    <x-row>
      <x-col span="8">
        <x-time-picker [(ngModel)]="model2"></x-time-picker>
      </x-col>
    </x-row>
  `,
  styles: [
    `
      :host {
        background-color: var(--x-background);
        padding: 1rem;
        border: 0.0625rem solid var(--x-border);
      }
      x-row:not(:first-child) {
        margin-top: 1rem;
      }
    `
  ]
})
class TestXTimePickerComponent {
  model1: any;
  model2 = new Date();
  constructor(private cdr: ChangeDetectorRef) {
    interval(0).subscribe((x) => {
      this.cdr.detectChanges();
    });
  }
}

@Component({
  template: `
    <x-theme showDark></x-theme>
    <x-row>
      <x-col span="12">
        <x-time-picker label="方式" [(ngModel)]="model"></x-time-picker>
      </x-col>
    </x-row>
    <x-row>
      <x-col span="12">
        <x-time-picker label="方式" [(ngModel)]="model" direction="column-reverse"></x-time-picker>
      </x-col>
    </x-row>
    <x-row>
      <x-col span="12">
        <x-time-picker label="方式" [(ngModel)]="model" direction="row"></x-time-picker>
      </x-col>
    </x-row>
    <x-row>
      <x-col span="12">
        <x-time-picker label="方式" [(ngModel)]="model" direction="row-reverse"></x-time-picker>
      </x-col>
    </x-row>
  `,
  styles: [
    `
      :host {
        background-color: var(--x-background);
        padding: 1rem;
        border: 0.0625rem solid var(--x-border);
      }
      x-row:not(:first-child) {
        margin-top: 1rem;
      }
    `
  ]
})
class TestXTimePickerLabelComponent {
  model: any;
  constructor(private cdr: ChangeDetectorRef) {
    interval(50).subscribe((x) => {
      this.cdr.detectChanges();
    });
  }
}

@Component({
  template: `
    <x-theme showDark></x-theme>
    <x-row>
      <x-col span="12">
        <x-time-picker disabled></x-time-picker>
      </x-col>
    </x-row>
    <x-row>
      <x-col span="12">
        <x-time-picker [(ngModel)]="model" disabled></x-time-picker>
      </x-col>
    </x-row>
  `,
  styles: [
    `
      :host {
        background-color: var(--x-background);
        padding: 1rem;
        border: 0.0625rem solid var(--x-border);
      }
      x-row:not(:first-child) {
        margin-top: 1rem;
      }
    `
  ]
})
class TestXTimePickerDisabledComponent {
  model = new Date();
}

@Component({
  template: `
    <x-theme showDark></x-theme>
    <x-row>
      <x-col span="12">
        <x-time-picker [(ngModel)]="model" required></x-time-picker>
      </x-col>
    </x-row>
    <x-row>
      <x-col span="12">
        <x-time-picker [(ngModel)]="model" label="选择" required></x-time-picker>
      </x-col>
    </x-row>
  `,
  styles: [
    `
      :host {
        background-color: var(--x-background);
        padding: 1rem;
        border: 0.0625rem solid var(--x-border);
      }
      x-row:not(:first-child) {
        margin-top: 1rem;
      }
    `
  ]
})
class TestXTimePickerRequiredComponent {
  model: any;
  constructor(private cdr: ChangeDetectorRef) {
    interval(50).subscribe((x) => {
      this.cdr.detectChanges();
    });
  }
}

@Component({
  template: `
    <x-theme showDark></x-theme>
    <x-row>
      <x-col span="12">
        <x-time-picker [(ngModel)]="model" label="小时" type="hour"></x-time-picker>
      </x-col>
    </x-row>
    <x-row>
      <x-col span="12">
        <x-time-picker [(ngModel)]="model" label="分钟" type="minute"></x-time-picker>
      </x-col>
    </x-row>
  `,
  styles: [
    `
      :host {
        background-color: var(--x-background);
        padding: 1rem;
        border: 0.0625rem solid var(--x-border);
      }
      x-row:not(:first-child) {
        margin-top: 1rem;
      }
    `
  ]
})
class TestXTimePickerHourOrMinuteComponent {
  model: any;
  constructor(private cdr: ChangeDetectorRef) {
    interval(50).subscribe((x) => {
      this.cdr.detectChanges();
    });
  }
}
