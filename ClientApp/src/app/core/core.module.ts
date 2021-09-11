import { NgModule } from '@angular/core';
import { NavigationListComponent } from './components/navigation-list/navigation-list.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  exports: [NavigationListComponent, MainLayoutComponent, HeaderComponent, FooterComponent],
  declarations: [NavigationListComponent, MainLayoutComponent, HeaderComponent, FooterComponent],
  imports: [SharedModule]
})
export class CoreModule {}
