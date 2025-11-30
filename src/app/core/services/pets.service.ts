import {Injectable} from '@angular/core';
import {Observable, from, map} from 'rxjs'; // <-- Import 'from' and 'map'
import {createClient} from 'contentful';
import {Pet} from '../../shared/models/pets.model'; // Assuming this interface is correct

// Use constants for configuration, often stored in an environment file

@Injectable({
  providedIn: 'root',
})
const CONTENTFUL_CONFIG = {
  space: '',
  accessToken: '',
};

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
