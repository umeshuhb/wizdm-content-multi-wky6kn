import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ContentConfig, ContentConfigToken } from './loader/content-configurator.service';
import { ContentConfigurator } from './loader/content-configurator.service';
import { ContentLoader } from './loader/content-loader.service';
import { SelectorResolver } from './router/selector-resolver.service';
import { ContentStreamer } from './streamer/content-streamer.service';
import { ContentDirective } from './streamer/content.directive';

@NgModule({
  declarations: [ ContentDirective ],
  imports: [ HttpClientModule ],
  exports: [ ContentDirective ],
  providers: [ ContentLoader, ContentStreamer ]
})
export class ContentModule { 
  /** Initializes the content module with loaders. Call this once in the app root module */
  static init(config: ContentConfig): ModuleWithProviders<ContentModule> {
    return {
      ngModule: ContentModule,
      providers: [
        // Configuration token used internally
        { provide: ContentConfigToken, useValue: config }, 
        // Content configurator providing default values when missing 
        ContentConfigurator,
        // Standard selector resolver provided only at root level
        SelectorResolver
      ]
    }
  }
}