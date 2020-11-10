import { Injectable } from '@angular/core';
import { wordtwo } from '../sql/export';
import { InMemoryDbService } from 'angular-in-memory-web-api';
@Injectable({
  providedIn: 'root'
})
export class ProdataService implements InMemoryDbService{

  constructor() { }
  createDb() {
    const program = [
      {
        id: 1,
        program: 'ことか',
        translate: '多么……啊',
    },
    {
      id: 2,
      program: '名词+がち  動詞ます＋がち',
      translate: '常常。。',
  },
  {
      id: 3,
      program: 'ないことには',
      translate: '从……立场上来看……',
  },
  {
      id: 4,
      program: 'ものだ',
      translate: '劝告；轻度命令',
  },
  {
      id: 5,
      program: 'たところ',
      translate: 'たところ',
  },
  {
      id: 6,
      program: 'をめぐる',
      translate: '以……为中心；与此相关的事',
  },
  {
      id: 7,
      program: 'ように',
      translate: '表示范例(ような)',
  },
  {
      id: 8,
      program: 'によれば',
      translate: '按……；根据……',
  },
  {
      id: 9,
      program: 'として',
      translate: '作为',
  },
  {
      id: 10,
      program: 'ながら',
      translate: '虽然……但是……',
  },
  {
      id: 11,
      program: 'にすれば',
      translate: '从……立场上来看……',
  },
  {
      id: 12,
      program: 'あまり',
      translate: '过度……',
  },
  {
      id: 13,
      program: 'ように',
      translate: '表示目标(ような)',
  },
  {
      id: 14,
      program: 'とともに',
      translate: '和……一起',
  },
  {
      id: 15,
      program: 'ことだ',
      translate: '应该；必须（表劝告时使用）',
  },
  {
      id: 16,
      program: 'にしては',
      translate: '与预想的不同',
  },
  {
      id: 17,
      program: 'にしても',
      translate: '从……立场上来看……',
  },
  {
      id: 18,
      program: 'striというとng',
      translate: '列举与话题相关有代表性的事物',
  },
  {
      id: 19,
      program: 'にしろ',
      translate: '即使……也……；不论……',
  },
  {
      id: 20,
      program: 'につき',
      translate: '因……而……；由于……所以……',
  },
    ];
    return {program};
  }
}
