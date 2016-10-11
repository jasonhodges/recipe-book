import {Directive, Input, ViewContainerRef, TemplateRef} from '@angular/core';

@Directive({
  selector: '[rb-unless]'
})
export class UnlessDirective {
  @Input() set unless(condition: boolean) {
    if(!condition) {
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      this.vcRef.clear()
    }
  }

  constructor(private templateRef: TemplateRef, private vcRef: ViewContainerRef) { }

}
