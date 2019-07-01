#!/usr/bin/env node
import { getPuzzle, descriptionGame } from '../games/progression';
import flow from '../flow';

flow(getPuzzle, descriptionGame);
