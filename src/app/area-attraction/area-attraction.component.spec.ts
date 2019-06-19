import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaAttractionComponent } from './area-attraction.component';

describe('AreaAttractionComponent', () => {
  let component: AreaAttractionComponent;
  let fixture: ComponentFixture<AreaAttractionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaAttractionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaAttractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
