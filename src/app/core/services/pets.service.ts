import {Injectable} from '@angular/core';
import {Observable, from, map} from 'rxjs';
import {createClient} from 'contentful';
import {Pet} from '../../shared/models/pets.model';
import {environment} from '../../../environments/environment';

const CONTENTFUL_CONFIG = {
  space: environment.space,
  accessToken: environment.accessToken,
};

@Injectable({
  providedIn: 'root',
})
export class PetsService {
  private contentfulClient = createClient(CONTENTFUL_CONFIG);

  getPets(): Observable<Pet[]> {
    const entriesPromise = this.contentfulClient.getEntries({
      content_type: 'pets',
    });

    return from(entriesPromise).pipe(
      map(response => {
        return response.items.map(item => (

          {
            id: item.sys.id,
            item,
            ...item.fields
          } as Pet));
      })
    );
  }
}
