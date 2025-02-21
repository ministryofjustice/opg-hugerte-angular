import { Observable, throwError, timeout } from 'rxjs';
import { ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { EditorComponent } from '../../../main/ts/editor/editor.component';
import type { Editor } from 'hugerte';
import { Keyboard, Keys } from '@ephox/agar';

export const throwTimeout =
  (timeoutMs: number, message: string = `Timeout ${timeoutMs}ms`) =>
    <T>(source: Observable<T>) =>
      source.pipe(
        timeout({
          first: timeoutMs,
          with: () => throwError(() => new Error(message)),
        })
      );

export const captureLogs = async (
  method: 'log' | 'warn' | 'debug' | 'error',
  fn: () => Promise<void> | void
): Promise<unknown[][]> => {
  const original = console[method];
  try {
    const logs: unknown[][] = [];
    console[method] = (...args: unknown[]) => logs.push(args);
    await fn();
    return logs;
  } finally {
    console[method] = original;
  }
};

export const fakeTypeInEditor = (fixture: ComponentFixture<unknown>, str: string) => {
  const editor: Editor = fixture.debugElement.query(By.directive(EditorComponent)).componentInstance.editor!;
  editor.getBody().innerHTML = '<p>' + str + '</p>';
  Keyboard.keystroke(Keys.space(), {}, { dom: editor.getBody() });
  fixture.detectChanges();
};
