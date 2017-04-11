import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
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

export const routes: Routes = [
    { path: '', component: TooltipComponent },
    { path: 'checkbox', component: CheckboxComponent },
    { path: 'autocomplete', component: AutocompleteComponent },
    { path: 'input', component: InputComponent },
    { path: 'radio', component: RadioButtonComponent },
    { path: 'select', component: SelectComponent },
    { path: 'slidder', component: SlidderComponent },
    { path: 'slide-toggle', component: SlideToggleComponent },
    { path: 'menu', component: MenuComponent },
    { path: 'slide-nav-fab', component: SlideNavFabComponent },
    { path: 'toolbar', component: ToolbarComponent },
    { path: 'grid-list', component: GridListComponent },
    { path: 'card', component: CardComponent },
    { path: 'button', component: ButtonComponent },
    { path: 'button-toggle', component: ButtonToggleComponent },
    { path: 'chips', component: ChipsComponent },
    { path: 'icon', component: IconComponent },
    { path: 'progress-spiner', component: ProgressSpinerComponent },
    { path: 'progress-bar', component: ProgressBarComponent },
    { path: 'dialog', component: DialogComponent },
    { path: 'tooltip', component: TooltipComponent },
    // { path: 'messages', component: MessagesDemo },
    // { path: 'growl', component: GrowlDemo },
    // { path: 'carousel', component: CarouselDemo },
    // { path: 'inputswitch', component: InputSwitchDemo },
    // { path: 'selectbutton', component: SelectButtonDemo },
    // { path: 'calendar', component: CalendarDemo },
    // { path: 'dropdown', component: DropdownDemo },
    // { path: 'progressbar', component: ProgressBarDemo },
    // { path: 'chart', component: ChartDemo },
    // { path: 'piechart', component: PieChartDemo },
    // { path: 'doughnutchart', component: DoughnutChartDemo },
    // { path: 'linechart', component: LineChartDemo },
    // { path: 'barchart', component: BarChartDemo },
    // { path: 'radarchart', component: RadarChartDemo },
    // { path: 'polarareachart', component: PolarAreaChartDemo },
    // { path: 'menu', component: MenuDemo },
    // { path: 'tieredmenu', component: TieredMenuDemo },
    // { path: 'menubar', component: MenubarDemo },
    // { path: 'slidemenu', component: SlideMenuDemo },
    // { path: 'breadcrumb', component: BreadcrumbDemo },
    // { path: 'slider', component: SliderDemo },
    // { path: 'lightbox', component: LightboxDemo },
    // { path: 'paginator', component: PaginatorDemo },
    // { path: 'megamenu', component: MegaMenuDemo },
    // { path: 'panelmenu', component: PanelMenuDemo },
    // { path: 'datatable', component: DataTableDemo },
    // { path: 'datatablefacets', component: DataTableFacetsDemo },
    // { path: 'datatablepaginator', component: DataTablePaginatorDemo },
    // { path: 'datatablesort', component: DataTableSortDemo },
    // { path: 'datatableresponsive', component: DataTableResponsiveDemo },
    // { path: 'datatableselection', component: DataTableSelectionDemo },
    // { path: 'datatablefilter', component: DataTableFilterDemo },
    // { path: 'datatableeditable', component: DataTableEditableDemo },
    // { path: 'datatablecolresize', component: DataTableColResizeDemo },
    // { path: 'datatablecolreorder', component: DataTableColReorderDemo },
    // { path: 'datatablescroll', component: DataTableScrollDemo },
    // { path: 'datatablegroup', component: DataTableGroupDemo },
    // { path: 'datatablelazy', component: DataTableLazyDemo },
    // { path: 'datatablecrud', component: DataTableCrudDemo },
    // { path: 'datatabletemplating', component: DataTableTemplatingDemo },
    // { path: 'datatablecontextmenu', component: DataTableCMDemo },
    // { path: 'datatablecoltoggler', component: DataTableColTogglerDemo },
    // { path: 'datatablerowexpansion', component: DataTableRowExpansionDemo },
    // { path: 'codehighlighter', component: CodeHighlighterDemo },
    // { path: 'orderlist', component: OrderListDemo },
    // { path: 'picklist', component: PickListDemo },
    // { path: 'schedule', component: ScheduleDemo },
    // { path: 'datagrid', component: DataGridDemo },
    // { path: 'datalist', component: DataListDemo },
    // { path: 'datascroller', component: DataScrollerDemo },
    // { path: 'datascrollerinline', component: DataScrollerInlineDemo },
    // { path: 'datascrollerloader', component: DataScrollerLoaderDemo },
    // { path: 'datascrollerinfinite', component: DataScrollerInfiniteDemo },
    // // {path: 'tree', component: TreeDemo},
    // { path: 'treetable', component: TreeTableDemo },
    // { path: 'terminal', component: TerminalDemo },
    // { path: 'splitbutton', component: SplitButtonDemo },
    // // {path: 'overlaypanel', component: OverlayPanelDemo},
    // { path: 'autocomplete', component: AutoCompleteDemo },
    // { path: 'editor', component: EditorDemo },
    // { path: 'responsive', component: ResponsiveDemo },
    // { path: 'multiselect', component: MultiSelectDemo },
    // { path: 'gmap', component: GMapDemo },
    // { path: 'contextmenu', component: ContextMenuDemo },
    // { path: 'dragdrop', component: DragDropDemo },
    // { path: 'toolbar', component: ToolbarDemo },
    // { path: 'validation', component: ValidationDemo },
    // { path: 'datatableexport', component: DataTableExportDemo },
    // { path: 'tabmenu', component: TabMenuDemo },
    // { path: 'tooltip', component: TooltipDemo },
    // { path: 'menumodel', component: MenuModelApi },
    // { path: 'mask', component: InputMaskDemo },
    // { path: 'fileupload', component: FileUploadDemo },
    // { path: 'tristatecheckbox', component: TriStateCheckboxDemo },
    // { path: 'blockui', component: BlockUIDemo }
];


export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
