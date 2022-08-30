import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const album = {
      id: 0,
      title: 'Road Trip in Asia',
      photos: [
        {
          src: 'https://news.cgtn.com/news/3d3d514e31636a4d34457a6333566d54/img/372fc8f863bf41fa9dcba65183012d56/372fc8f863bf41fa9dcba65183012d56.jpg',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          postedBy: 1,
          postedAt: 1617264644,
        },
        {
          src: 'https://images.chinahighlights.com/allpicture/2021/01/0da3194b1d7948aba18d28e4_cut_800x500_10.jpg',
          description:
            'Photo taken during my road trip in Asia. I wanted to underline the contrast in colors and the architectural lines.',
          comments: [
            {
              content: 'Love the colors and light.',
              postedBy: 2,
              postedAt: 1617276807,
            },
            {
              content:
                'I know this place ! I was there this summer. When were you there ? Maybe we missed eachother.',
              postedBy: 3,
              postedAt: 1617294807,
            },
          ],
          postedBy: 1,
          postedAt: 1617264645,
        },
      ],
      createdAt: 1617264637,
    };
    return { album };
  }
}
