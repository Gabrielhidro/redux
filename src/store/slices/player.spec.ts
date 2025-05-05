import { describe, expect, it } from 'vitest';
import { player as reducer, playerSlice, play } from './player';

describe('player slice', () => {
  it('player slice', () => {
    const initialState = playerSlice.getInitialState();
    const state = reducer(initialState, play([1, 2]));

    expect(state.currentModuleIndex).toEqual(1);
    expect(state.currentLessonIndex).toEqual(2);
  })
})