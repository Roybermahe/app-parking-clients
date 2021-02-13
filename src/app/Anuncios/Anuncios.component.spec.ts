import { TestBed, inject } from '@angular/core/testing';

import { AnunciosComponent } from './Anuncios.component';

describe('a Anuncios component', () => {
	let component: AnunciosComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				AnunciosComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([AnunciosComponent], (AnunciosComponent) => {
		component = AnunciosComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});