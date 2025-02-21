import '../alien/InitTestEnvironment';

import { Assertions } from '@ephox/agar';
import { describe, it, context, before } from '@ephox/bedrock-client';
import { Global } from '@ephox/katamari';

import { EditorComponent, HUGERTE_SCRIPT_SRC } from '../../../main/ts/public_api';
import { Version } from '../../../main/ts/editor/editor.component';
import { editorHook, hugerteVersionHook } from '../alien/TestHooks';
import type { Editor } from 'hugerte';
import { cleanupGlobalHugeRTE } from '@hugerte/framework-integration-shared';

describe('LoadHugeRTETest', () => {
  const assertHugeRTEVersion = (version: Version, editor: Editor) => {
    Assertions.assertEq(`Loaded version of HugeRTE should be ${version}`, version, editor.editorManager.majorVersion);
    Assertions.assertEq(`Loaded version of HugeRTE should be ${version}`, version, Global.hugerte.majorVersion);
  };

  for (const version of [ '1' ] as Version[]) {
    context(`With local version ${version}`, () => {
      const createFixture = editorHook(EditorComponent, {
        providers: [
          {
            provide: HUGERTE_SCRIPT_SRC,
            useValue: `/project/node_modules/hugerte-${version}/hugerte.min.js`,
          },
        ],
      });

      before(cleanupGlobalHugeRTE);

      it('Should be able to load local version of HugeRTE specified via dependency injection', async () => {
        const { editor } = await createFixture();
        assertHugeRTEVersion(version, editor);
      });
    });

    context(`With version ${version} loaded from miniature`, () => {
      const createFixture = editorHook(EditorComponent);
      hugerteVersionHook(version);

      it('Should be able to load with miniature', async () => {
        const { editor } = await createFixture();
        assertHugeRTEVersion(version, editor);
      });
    });
  }

  for (const version of [ '1' ] as Version[]) {
    context(`With cloud version ${version}`, () => {
      const createFixture = editorHook(EditorComponent);

      before(cleanupGlobalHugeRTE);

      it(`Should be able to load HugeRTE ${version} from jsDelivr CDN`, async () => {
        const { editor } = await createFixture({ cdnVersion: version });
        assertHugeRTEVersion(version, editor);
        Assertions.assertEq(
          'HugeRTE should have been loaded from jsDelivr CDN',
          `https://cdn.jsdelivr.net/npm/hugerte@${version}`,
          Global.hugerte.baseURI.source
        );
      });
    });
  }
});
