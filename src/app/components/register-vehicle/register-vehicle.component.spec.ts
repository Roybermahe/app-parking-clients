import { TestBed, inject } from '@angular/core/testing';

import { RegisterVehicleComponent } from './register-vehicle.component';

describe('a register-vehicle component', () => {
	let component: RegisterVehicleComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				RegisterVehicleComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([RegisterVehicleComponent], (RegisterVehicleComponent) => {
		component = RegisterVehicleComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});