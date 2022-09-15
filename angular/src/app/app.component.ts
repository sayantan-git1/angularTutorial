import { Component, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  today= Date.now();
  name="PEtEr PArker";
  str="Hello world";
  money=100;

  constructor(private vcr:ViewContainerRef,
    private cfr:ComponentFactoryResolver
    ){}

    async loadUser(){
      this.vcr.clear();
      const {UserComponent} = await import ('./user/user.component');
      this.vcr.createComponent(this.cfr.resolveComponentFactory(UserComponent))
    }
}
