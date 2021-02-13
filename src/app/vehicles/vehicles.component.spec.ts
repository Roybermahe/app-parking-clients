import { TestBed, inject } from '@angular/core/testing';

import { VehiclesComponent } from './vehicles.component';

describe('a vehicles component', () => {
	let component: VehiclesComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				VehiclesComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([VehiclesComponent], (VehiclesComponent) => {
		component = VehiclesComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});