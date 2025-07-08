import { Component } from '@angular/core';
import { ResumeExperience } from 'src/app/models/ResumeExperience';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  allResumeExperience: ResumeExperience[] = [
    {
      title: 'dateexperience6',
      date: 'titleexperience6',
      description: 'descriptionexperience6'
    },
    {
      title: 'dateexperience5',
      date: 'titleexperience5',
      description: 'descriptionexperience5'
    },
    {
      title: 'dateexperience4',
      date: 'titleexperience4',
      description: 'descriptionexperience4'
    },
    {
      title: 'dateexperience3',
      date: 'titleexperience3',
      description: 'descriptionexperience3'
    },
    {
      title: 'dateexperience2',
      date: 'titleexperience2',
      description: 'descriptionexperience2'
    },
    {
      title: 'dateexperience1',
      date: 'titleexperience1',
      description: 'descriptionexperience1'
    }
  ];
}
