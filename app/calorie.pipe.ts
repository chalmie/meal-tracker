import {Pipe, PipeTransform} from 'angular2/core';
import {Entry} from './entry.model';

@Pipe({
  name: "calorie",
  pure: false
})
export class CaloriePipe implements PipeTransform {
  transform(input: Entry[], args) {
    var desiredCalorieState = args[0];
    if(desiredCalorieState === "healthy") {
      return input.filter((entry) => {
        return entry.healthy;
      });
    } else if (desiredCalorieState === "unhealthy") {
      return input.filter((entry) => {
        return !entry.healthy;
      });
    } else {
      return input;
    }
  }
}
