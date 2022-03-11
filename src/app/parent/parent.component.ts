import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder, FormArray } from '@angular/forms';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {


  constructor(private fb: FormBuilder) { }
  count = 0;
  value = '';
  data = [
    { name: 'sam', email: 'sam@gmail.com' },
    { name: 'sam', email: 'sam@gmail.com' },
    { name: 'sam', email: 'sam@gmail.com' },
    { name: 'sam', email: 'sam@gmail.com' }
  ]

  arrOfObj = [
    { name: 'eve' },
    { name: 'john' },
    { name: 'jane' }

  ];

  m2m = [
    {
      "_id": "613886d6cca35800127468e8",
      "zone": "A",
      "country": "India",
      "operator_alias": "Idea",
      "network_code": "2590",
      "increment_type": "KB",
      "network_operator": "613886d6cca35800127468e6",
      "network_category": "M2M",
      "updated_at": "2021-09-08T09:48:06.749Z",
      "__v": 0
    },
    {
      "_id": "613886d6cca35800127468e9",
      "zone": "A",
      "country": "china",
      "operator_alias": "airtel",
      "network_code": "2591",
      "increment_type": "KB",
      "network_operator": "613886d6cca35800127468e6",
      "network_category": "M2M",
      "updated_at": "2021-09-08T09:48:06.749Z",
      "__v": 0
    },
    {
      "_id": "613886d6cca35800127468ea",
      "zone": "A",
      "country": "italy",
      "operator_alias": "Idea",
      "network_code": "2592",
      "increment_type": "KB",
      "network_operator": "613886d6cca35800127468e6",
      "network_category": "M2M",
      "updated_at": "2021-09-08T09:48:06.749Z",
      "__v": 0
    },
    {
      "_id": "613886d6cca35800127468eb",
      "zone": "B",
      "country": "India",
      "operator_alias": "Idea",
      "network_code": "2593",
      "increment_type": "KB",
      "network_operator": "613886d6cca35800127468e6",
      "network_category": "M2M",
      "updated_at": "2021-09-08T09:48:06.749Z",
      "__v": 0
    },
    {
      "_id": "613886d6cca35800127468ec",
      "zone": "B",
      "country": "japan",
      "operator_alias": "jio",
      "network_code": "2594",
      "increment_type": "KB",
      "network_operator": "613886d6cca35800127468e6",
      "network_category": "M2M",
      "updated_at": "2021-09-08T09:48:06.749Z",
      "__v": 0
    },
    {
      "_id": "613886d6cca35800127468ed",
      "zone": "B",
      "country": "usa",
      "operator_alias": "airtel",
      "network_code": "2595",
      "increment_type": "KB",
      "network_operator": "613886d6cca35800127468e6",
      "network_category": "M2M",
      "updated_at": "2021-09-08T09:48:06.749Z",
      "__v": 0
    }
  ]

  ngOnInit(): void {

  }

  arrange() {
    let formatTariff = [];
    let zone = this.m2m.map((zone => zone.zone));
    let y = [...new Set(this.m2m.map((zone) => zone.zone))];

    const mapped = this.m2m.map(item => Object.assign(item, { price: (item.network_code) }));
    console.log('mapped', mapped);



  }

  onOpen(event: any) {
    this.value = event;
  }


}
