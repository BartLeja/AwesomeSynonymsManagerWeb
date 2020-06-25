import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWordWithSynonymsDialogComponent } from './add-word-with-synonyms-dialog.component';

describe('AddWordWithSynonymsDialogComponent', () => {
  let component: AddWordWithSynonymsDialogComponent;
  let fixture: ComponentFixture<AddWordWithSynonymsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddWordWithSynonymsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWordWithSynonymsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
