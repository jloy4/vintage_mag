import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewInstrumentPage } from './new-instrument';

@NgModule({
  declarations: [
    NewInstrumentPage,
  ],
  imports: [
    IonicPageModule.forChild(NewInstrumentPage),
  ],
})
export class NewInstrumentPageModule {}
