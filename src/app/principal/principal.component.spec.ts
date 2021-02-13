import { TestBed, inject } from '@angular/core/testing';

import { PrincipalComponent } from './principal.component';

describe('a principal component', () => {
	let component: PrincipalComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				PrincipalComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([PrincipalComponent], (PrincipalComponent) => {
		component = PrincipalComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});