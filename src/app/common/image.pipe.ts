import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'image' })
export class ImagePipe implements PipeTransform {
    public transform(weather: string): string {
        let image;
        switch (weather.toLocaleLowerCase()) {
            case 'clouds':
                image = "clouds"
                break;
            case 'clear':
                image = "sun";
                break;
            case 'rain':
                image = "rain";
                break;
            case 'snow':
                image = "snow";
                break;
        
            default:
                image = "sun";
                break;
        }

        
        return `https://www.angulartraining.com/images/weather/${image}.png`;
    }
}