import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
courses=[]
sonali=[1,2,3]
viewMode = 'lemg'

coursess;
onLoad()
{
  this.coursess = [
    {id :1, name : "course1"},
    {id :2, name : "course2"},
    {id :3, name : "course3"}
  ]
}
trackCourse(index,course)
{
  return course ? course.id : undefined;
}
onAdd()
{
  this.coursess.push({id :4, name : "course4"});
}
onRemove(course)
{
  let index = this.coursess.indexOf(course);
  this.coursess.splice(index ,1);
}
onUpdate(course)
{
  course.name = "Sona";
}

}
