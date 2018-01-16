import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const meetups = [
      {name: "vitae nibh.", city: "Nocera Umbra", address: "P.O. Box 561, 7818 Sed, Street", id: 11},
    	{name: "tincidunt aliquam", city: "Whangarei", address: "P.O. Box 835, 5788 Non Rd.", id: 12},
    	{name: "Quisque varius.", city: "Ambala", address: "P.O. Box 376, 3975 Dapibus Ave", id: 13},
    	{name: "dolor dolor,", city: "Compiano", address: "P.O. Box 334, 1282 Integer St.", id: 14},
    	{name: "cursus. Integer", city: "Chillán", address: "Ap #500-8061 Urna. Rd.", id: 15},
    	{name: "vitae, posuere", city: "Llanquihue", address: "Ap #994-8831 Mi Av.", id: 16},
    	{name: "magna nec", city: "Maasmechelen", address: "107-7331 Risus. St.", id: 17},
    	{name: "neque non", city: "Patna", address: "716-8639 Ultrices Street", id: 18},
    	{name: "sollicitudin orci", city: "Maglie", address: "8204 Vulputate, Road", id: 19},
    	{name: "vitae aliquam", city: "Andenne", address: "Ap #746-9705 Mi Avenue", id: 20}
    ];
    return {meetups};
  }
}
