#!/usr/bin/env node
import { getQuestion, getAnswer, descriptionGame } from '../games/gcd';
import flow from '../flow';

flow(getQuestion, getAnswer, descriptionGame);
