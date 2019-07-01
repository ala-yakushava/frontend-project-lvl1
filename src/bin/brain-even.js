#!/usr/bin/env node
import { getPuzzle, descriptionGame } from '../games/even';
import flow from '../flow';

flow(getPuzzle, descriptionGame);
