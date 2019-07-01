#!/usr/bin/env node
import { getPuzzle, descriptionGame } from '../games/prime';
import flow from '../flow';

flow(getPuzzle, descriptionGame);
