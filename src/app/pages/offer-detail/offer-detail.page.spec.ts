import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { OfferDetailPage } from './offer-detail.page';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

describe('OfferDetailPage', () => {
  let component: OfferDetailPage;
  let fixture: ComponentFixture<OfferDetailPage>;

  const mockOffer = {
    id: 1,
    title: 'Séjour de rêve à Nosy Be',
    description: 'Profitez de 5 jours inoubliables à Nosy Be, avec hôtel, activités nautiques et excursions incluses.',
    price: 450000,
    start_date: '2025-09-20',
    end_date: '2025-09-25',
    available_slots: 12,
    cancellation_policy: 'Annulation gratuite 48h avant le départ',
    destination: {
      id: 1,
      name: 'Nosy Be',
      city: null,
      description: 'Île paradisiaque au nord-ouest de Madagascar',
      images: ['data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTEhIWFRUXGBYVFxcYFRgXFhUYFRcXGBcXGBcYHiggGBolGxUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGxAQGy0lHyYvLTAtLS0tLS0tLS8tLS0tLS0tLS0tLSstLS0rLS0tLS0tLS0tLS0tLS0tLS0tKy0tLf/AABEIAMIBAwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAFAAIDBAYBB//EAEIQAAIBAgQDBgMEBwYHAQEAAAECEQADBBIhMQVBUQYTImFxkTKBsUKhwfAUI1JyktHhFRYzYqLxB1NUgrLS4pMk/8QAGgEAAwEBAQEAAAAAAAAAAAAAAAECAwQFBv/EAC4RAAICAQMEAAQFBQEAAAAAAAABAhEDBBIhEzFBURQiYXEFMoHh8FKRobHRI//aAAwDAQACEQMRAD8AG2GW4ArLvzqpxfheQyuo5+VV8BjMmp2iap4ztYM+m3rv69K9nJqI4p0zzI43OPBew18KIbYiquIxFvNCsD5TtV6zZtYq2GtsF3zAmADHMH89KyON4YyqbmVwubKHAQJ5EoPEAeRMVz59RJJwaii8eEnxI0L3rYUa67R58/lNOsmQCPzG9AMNcLRmUNInzJBIJn20NEuGYsRlJ+REHUj+e9Zw/EqmlPsOWm447h/C3SBHI8qcX6/KqamprjTFexS7nHY3EEltat8EvhLqk7c/OqNSWXysD0M02rVCTp2bq9xVGypO+noah4nwIXV2OYDQjr5+1COFNF9GMEN4h9/Kt5abwztXDk/82qOuHzrk8nxmEKGDpy10I+VVCK2Xa/BLJdQcxInzrJd2ZiNa7cc90bOWcdrogIrkVIRTrK+KtCBl23pNR90YkDSrF182nnUpcoAAZ025a0hg0inrbMSNtqcw1q/asTbid4oboED76QoHOqxFFMfhdoH+w5/ShxFCB2iEimEVMRTCKYrIYppFTEUxhQMhYUwipiKYwpUUmQkVwpUsU1qlopMgZaZkqYipVQATzqWi0ysLY60qkZaVTtHYas8TtXka0uVLpEeKCp65Z2by0PSs/i+FXlJISY6CYHI6/kaVSVgSRk066zy38v51pOzfaK7ZcI4F1J6w4+Z322NeE59Tmf8Ac7VDZ+UFcIxF2ywd0UodGVwAtwc1K862vGMJhr1g37BVEZcoRFCkERmFwnSfIR85qLtDjcNi/AAtq5lIDN4Q23gnKTmnkI9eVAuFYlrK5e8AzQGkbSYlUaDmAn3Fc7aXblMt2/uUluhVyhToT1iOf59a7bZTlI39p18/KrvE+HvbBOaRoZjcHYgmCQR5D6UJsvDZp0XXyOmkiR5VyqPJTdo1+HMialDVd4bw/Kqhtii7jqB+dNKgv2IJFfYYp7oo8eapleKdbAnWuA6wNTTwtXGakuGQ00aDhmD8VuDzEHyP+9bO2sLlJ8qxHAcaVKrznfy6Vu8K4YajWuHUWnydmGmuDP8AaKw3duQeW3kKznDbWZDKyARqN55a1u+LWgVI/MVmuHkWy6CN/pVYp/ILJH5gFe4bqeUaxv60OvKUYxp09DRviV/xkRvVDHiIkzpA9/5V1wb8nNJLwDl0MmpXcMNdD5c6jNcSroixCWgRoK03CMF4AGFAcHcytpzrV4LENlAJrHNdcGuKrKuPOVGWAZDRP0rHXLda7i2IBOu3Ks3i7Wm/OqxdgydweVphFTFaaRW1GNkJFNIqUrTStFDshIphFTFaaVpDsgIphWpytNK0FJkBFT27JbQU3LTrbEGahopMnOGI0ilU36RXKjkorfoFu2PCwadZBmPKPfX7qbhsDzWZJA05AnSYqiuKfvGEhAZID+caT6jepziLhto3jAGvxAZhz8zz3BGlfJyyZHGpf8PUjEu4nhNpxLXIcfGAQATIgAt6/mIqrxv... [truncated]'],
      created_by: null
    }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfferDetailPage, IonicModule.forRoot(), CommonModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: () => '1',
              },
            },
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(OfferDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load offer data on init', () => {
    component.ngOnInit();
    expect(component.offer).not.toBeNull();
    expect(component.offer?.id).toBe(1);
  });

  it('should display offer details in the template', () => {
    component.offer = mockOffer;
    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('ion-title').textContent).toContain(mockOffer.title);
    expect(compiled.querySelector('h1').textContent).toContain(mockOffer.title);
    expect(compiled.querySelector('.text-gray-500').textContent).toContain(mockOffer.destination.name);
    expect(compiled.querySelector('.mt-4').textContent).toContain(mockOffer.description);
  });

  it('should call reserveOffer when the button is clicked', () => {
    spyOn(component, 'reserveOffer');
    const button = fixture.nativeElement.querySelector('ion-button');
    button.click();
    expect(component.reserveOffer).toHaveBeenCalled();
  });
});