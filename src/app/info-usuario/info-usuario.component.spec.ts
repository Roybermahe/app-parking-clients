import { TestBed, inject } from '@angular/core/testing';

import { InfoUsuarioComponent } from './info-usuario.component';

describe('a info-usuario component', () => {
	let component: InfoUsuarioComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				InfoUsuarioComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([InfoUsuarioComponent], (InfoUsuarioComponent) => {
		component = InfoUsuarioComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});