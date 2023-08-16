#!/bin/bash

aws s3 sync s3://taverna-config/ /var/app/current/assets/ --delete
