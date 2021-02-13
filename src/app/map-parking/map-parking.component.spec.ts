import { TestBed, inject } from '@angular/core/testing';

import { MapParkingComponent } from './map-parking.component';

describe('a map-parking component', () => {
	let component: MapParkingComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				MapParkingComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([MapParkingComponent], (MapParkingComponent) => {
		component = MapParkingComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});