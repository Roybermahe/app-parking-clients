import { TestBed, inject } from '@angular/core/testing';

import { SanzionesComponent } from './sanziones.component';

describe('a sanziones component', () => {
	let component: SanzionesComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				SanzionesComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([SanzionesComponent], (SanzionesComponent) => {
		component = SanzionesComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});