import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-comment',
  styleUrls: ['./form-comment.component.scss'],
  templateUrl: './form-comment.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormCommentComponent {
  private readonly wordCountRegex = /^(?:\b\w+\b[\s]*){4,}$/;

  readonly comment: FormGroup = new FormGroup({ 
    comment: new FormControl('',[Validators.pattern(this.wordCountRegex)]) });

    onCommentSubmitted(comment: FormGroup): void {
      console.log(comment.value);
    }
}
