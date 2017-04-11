import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './app.routes';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {  MdAutocompleteModule,
          MdButtonModule,
          MdButtonToggleModule,
          MdCardModule,
          MdChipsModule,
          MdCheckboxModule,
          MdDialogModule,
          MdGridListModule,
          MdIconModule,
          MdInputModule,
          MdListModule,
          MdMenuModule,
          MdProgressBarModule,
          MdProgressSpinnerModule,
          MdRadioModule,
          MdRippleModule,
          MdSelectModule,
          MdSidenavModule,
          MdSliderModule,
          MdSlideToggleModule,
          MdSnackBarModule,
          MdTabsModule,
          MdToolbarModule,
          MdTooltipModule,
          OverlayModule,
          PortalModule,
          RtlModule,
          StyleModule,
          A11yModule,
          PlatformModule,
          CompatibilityModule,
          ObserveContentModule}

from '@angular/material';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { InputComponent } from './input/input.component';
import { RadioButtonComponent } from './radio-button/radio-button.component';
import { SelectComponent } from './select/select.component';
import { SlidderComponent } from './slidder/slidder.component';
import { SlideToggleComponent } from './slide-toggle/slide-toggle.component';
import { MenuComponent } from './menu/menu.component';
import { SlideNavFabComponent } from './slide-nav-fab/slide-nav-fab.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ListComponent } from './list/list.component';
import { GridListComponent } from './grid-list/grid-list.component';
import { CardComponent } from './card/card.component';
import { ButtonComponent } from './button/button.component';
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';
import { ChipsComponent } from './chips/chips.component';
import { IconComponent } from './icon/icon.component';
import { ProgressSpinerComponent } from './progress-spiner/progress-spiner.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { DialogComponent } from './dialog/dialog.component';
import { TooltipComponent } from './tooltip/tooltip.component';

@NgModule({
  declarations: [
    AppComponent,
    AutocompleteComponent,
    CheckboxComponent,
    InputComponent,
    RadioButtonComponent,
    SelectComponent,
    SlidderComponent,
    SlideToggleComponent,
    MenuComponent,
    SlideNavFabComponent,
    ToolbarComponent,
    ListComponent,
    GridListComponent,
    CardComponent,
    ButtonComponent,
    ButtonToggleComponent,
    ChipsComponent,
    IconComponent,
    ProgressSpinerComponent,
    ProgressBarComponent,
    DialogComponent,
    TooltipComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutes,
    MdAutocompleteModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdCardModule,
    MdChipsModule,
    MdCheckboxModule,
    MdDialogModule,
    MdGridListModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdMenuModule,
    MdProgressBarModule,
    MdProgressSpinnerModule,
    MdRadioModule,
    MdRippleModule,
    MdSelectModule,
    MdSidenavModule,
    MdSliderModule,
    MdSlideToggleModule,
    MdSnackBarModule,
    MdTabsModule,
    MdToolbarModule,
    MdTooltipModule,
    OverlayModule,
    PortalModule,
    RtlModule,
    StyleModule,
    A11yModule,
    PlatformModule,
    CompatibilityModule,
    ObserveContentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
