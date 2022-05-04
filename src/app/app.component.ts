import { Component } from '@angular/core';

declare global {
  interface Window {
    iFrameResize:any;
  }
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'iframe-freeze';

  ngOnInit() {
    window.iFrameResize({ log: true, checkOrigin: false, autoResize: true, enablePublicMethods: true }, '#bb-journey');
    // pass url params to the iframe
    const params: string = window.location.search.replace("?", "&");
    const iframe = document.getElementById("bb-journey") as HTMLIFrameElement;

    console.log('iframe', iframe)

    iframe.src += params;
  }
}
