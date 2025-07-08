import { Component } from '@angular/core';
import { ResumeEducation } from 'src/app/models/ResumeEducation';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  allResumeEducation: ResumeEducation[] = [

    {
      title: 'dateeducation3',
      date: 'titleeducation3',
      description: 'descriptioneducation3'
    },
    {
      title: 'dateeducation2',
      date: 'titleeducation2',
      description: 'descriptioneducation2'
    },
    {
      title: 'dateeducation1',
      date: 'titleeducation1',
      description: 'descriptioneducation1'
    }
  ];
}
