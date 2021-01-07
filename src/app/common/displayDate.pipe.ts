import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'image' })
export class ImagePipe implements PipeTransform {
    public transform(day: number): string {
        
        return `https://www.angulartraining.com/images/weather/${image}.png`;
    }
}