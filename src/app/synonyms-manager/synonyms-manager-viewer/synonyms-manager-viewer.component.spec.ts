import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SynonymsManagerViewerComponent } from './synonyms-manager-viewer.component';

describe('SynonymsManagerViewerComponent', () => {
  let component: SynonymsManagerViewerComponent;
  let fixture: ComponentFixture<SynonymsManagerViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SynonymsManagerViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SynonymsManagerViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
