#!/bin/sh
# This handy script written by Rob Brennan <rob@therobbrennan.com>
# is a great way to check a single Cypress test for flaps.
#
# If you discover certain Cypress tests are inconsistently failing, this is
# a terrific way to verify whether you have resolved the problem or not.

# Specify the full path to the test
INT_TEST=${1:-cypress/integration/page.index.spec.js}

# Specify the number of iterations to run
ITERATIONS=${2:-10}

# Initialize success and fail counters
SUCCESS=0
FAIL=0

for i in $( seq 1 $ITERATIONS ); do
    echo "Running $i of $ITERATIONS"

    # Local development
    # npx cypress run --browser chrome --spec $INT_TEST
    # npx cypress run --browser electron --spec $INT_TEST

    # Docker container
    npx cypress run --browser electron --spec $INT_TEST

    rc=$?;

    # # Update our counters => /bin/bash
    # if [[ $rc != 0 ]]
    #   then # Failed run
    #     echo "Exit code: $rc"
    #     (($FAIL++))
    #   else # Exit code of 0 is a success
    #     (($SUCCESS++))
    # fi

    # Update our counters => /bin/sh
    if [ $rc != 0 ]
      then # Failed run
        echo "FAILED - Exit code: $rc"
        FAIL=`expr $FAIL + 1`
      else # Exit code of 0 is a success
        SUCCESS=`expr $SUCCESS + 1`
    fi

done;

# => /bin/bash
# SUCCESS_PCT=$(echo "($SUCCESS/$ITERATIONS)*100" | bc -l);
# SUCCESS_PCT_DISPLAY=$(printf %.2f $SUCCESS_PCT) # 90.00 for %.2f, 90.0000 for %.4f, etc

# => /bin/sh
SUCCESS_PCT_DISPLAY=$(echo "scale=2; ($SUCCESS/$ITERATIONS)*100" | bc)

echo "\n\nCOMPLETE:\n\t$SUCCESS successes with $FAIL failure(s) over $ITERATIONS iterations\n\t$SUCCESS_PCT_DISPLAY % success rate\n"

