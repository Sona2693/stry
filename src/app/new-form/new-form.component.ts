import { FormGroup, FormArray, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'new-form',
  templateUrl: './new-form.component.html',
  styleUrls: ['./new-form.component.css']
})
export class NewFormComponent  
{
  form = new FormGroup(
    {
       topics : new FormArray([])
    }); 

  addTopic(topic : HTMLInputElement)
    {
      this.topics.push(new FormControl(topic.value));
      topic.value = '';
    }    
  get topics()
  {
    return this.form.get('topics') as FormArray
  }
  remove(topic : FormControl)
  {
    let index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }
}
