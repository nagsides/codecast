/**
  The "common" component contains elements common to all three modes
  (recorder, player, sandbox).
*/

import MainView from './main_view';
import fullscreen  from './fullscreen';
import buffers from '../buffers/index';
import errors from './errors';
import resize from './resize';
import examples from './examples';
import ArduinoBundle from '../arduino/index';
import ReplayBundle from '../player/replay';
import RecordBundle from '../recorder/record';

export default function (bundle) {

  /* These bundle must be included early to allow other bundles to register
     replay/record handlers in their deferred callbacks. */
  bundle.include(ReplayBundle);
  bundle.include(RecordBundle);

  bundle.defineAction('modeChanged', 'Mode.Changed');
  bundle.addReducer('modeChanged', function (state, action) {
    return state.set('mode', action.mode);
  });

  bundle.include(MainView);
  bundle.include(fullscreen);
  bundle.include(buffers);
  bundle.include(errors);
  bundle.include(resize);
  bundle.include(examples);
  bundle.include(ArduinoBundle);

};
