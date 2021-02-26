import {Injectable} from '@angular/core';
import {HeroJobAdComponent} from './banner.component';
import {AdItem} from './ad-item';

@Injectable()
export class AdService {
  // tslint:disable-next-line:typedef
  getAds() {
    return [
      new AdItem(HeroJobAdComponent, {
        title: 'Hiring for several positions',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n' +
          '        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n' +
          '        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n' +
          '        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      }),

      new AdItem(HeroJobAdComponent, {
        title: 'Openings in all departments',
        body: '«Текст» — російський драматичний триллер режисера Кліма Шипенко, екранізація роману-бестселера ' +
          '«Текст» письменника Дмитра Глуховского, котрий сам адаптував свій роман у сценарій фільму. Головні ролі ' +
          'виконують Олександр Петров, Кристина Асмус і Іван Янковський.'
      }),

      new AdItem(HeroJobAdComponent, {
        title: 'Макулатура — Некоторый рисунок текст песни',
        body: 'Когда мы подходим к зеркалу Видим большую кастрюлю манной каши И растопленное сливочное масло посередине' +
          ' Так часто слышали сигнализацию Охотники за привидениями'
      })
    ];
  }
}
