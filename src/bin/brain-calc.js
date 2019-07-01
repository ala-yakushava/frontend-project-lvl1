#!/usr/bin/env node
import { getPuzzle, descriptionGame } from '../games/calc';
import flow from '../flow';

flow(getPuzzle, descriptionGame);
