import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { wordtwo } from '../../sql/export'
@Injectable({
  providedIn: 'root'
})
export class WorddaService implements InMemoryDbService{

  constructor() { }
  createDb(){
    const wordfor = [
      {
        id: 1,
        word: '坂道',
        jiaming: 'さかみち',
        translate: '坡道'
    },
    {
        id: 2,
        word: '工事',
        jiaming: 'こうじ',
        translate: '施工，工程'
    },
    {
        id: 3,
        word: '計画',
        jiaming: 'けいかく',
        translate: '计划'
    },
    {
        id: 4,
        word: '半分',
        jiaming: 'はんぶん',
        translate: '一半'
    },
    {
        id: 5,
        word: '事故',
        jiaming: 'じこ',
        translate: '事故'
    },
    {
        id: 6,
        word: '仕事',
        jiaming: 'しごと',
        translate: '工作'
    },
    {
        id: 7,
        word: '傷',
        jiaming: 'きず',
        translate: '受伤'
    },
    {
        id: 8,
        word: '薬',
        jiaming: 'くすり',
        translate: '薬'
    },
    {
        id: 9,
        word: '勉強',
        jiaming: 'べんきょう',
        translate: '学习'
    },
    {
        id: 10,
        word: '自動車',
        jiaming: 'じどうしゃ',
        translate: '汽车'
    },
    {
        id: 11,
        word: '通う',
        jiaming: 'かよう',
        translate: '定期，往返'
    },
    {
        id: 12,
        word: '強い',
        jiaming: 'つよい',
        translate: '强'
    },
    {
        id: 13,
        word: '風',
        jiaming: 'かぜ',
        translate: '風'
    },
    {
        id: 14,
        word: '寂し',
        jiaming: 'さびし',
        translate: '寂寞'
    },
    {
        id: 15,
        word: '気候',
        jiaming: 'きこう',
        translate: '气候'
    },
    {
        id: 16,
        word: '閉まる',
        jiaming: 'しまる',
        translate: 'guanbi'
    },
    {
        id: 17,
        word: '気分',
        jiaming: 'きぶん',
        translate: '心情氛围'
    },
    {
        id: 18,
        word: '時期',
        jiaming: 'じき',
        translate: '时期'
    },
    {
        id: 19,
        word: '夏休み',
        jiaming: 'なつやすみ',
        translate: '暑假'
    },
    {
        id: 20,
        word: '着く',
        jiaming: 'つく',
        translate: '到达'
    },
    {
        id: 21,
        word: '変わる',
        jiaming: 'かわる',
        translate: '改变'
    },
    ];
    return {wordfor};
  }
}
