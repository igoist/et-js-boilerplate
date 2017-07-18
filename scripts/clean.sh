#!/bin/bash

if [ -d "dist" ]; then
    echo "dist exists, so will remove it first and then create it"
    rm -r dist
else
    echo "dist doesn't exist, so will create it"
fi

mkdir dist