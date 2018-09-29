import { TestBed, inject } from '@angular/core/testing';
import { BookCreateService } from './book-create.service';
describe('BookCreateService', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [BookCreateService]
        });
    });
    it('should be created', inject([BookCreateService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=book-create.service.spec.js.map