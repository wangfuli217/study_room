#ifndef __CLOCK_H__
#define __CLOCK_H__

#include "Time.h"

/**
 * \brief namespace : cr(CloudRain21) (my private library)
 */
namespace cr
{

/**
 * \brief Utility class that measures the elapsed time
 */
class Clock
{
public:

	/**
	 * \brief Default constructor
	 *
	 * The clock starts automatically after being constructed.
	 */
	Clock();

	/**
	 * \brief Get the elapsed time
	 *
	 * This function returns the time elapsed since the last call
	 * to restart() (or the construction of the instance if restart()
	 * has not been called).
	 *
	 * \return Time elapsed
	 */
	Time getElapsedTime() const;

	/**
	 * \brief Restart the clock
	 *
	 * This function puts the time counter back to zero.
	 * It also returns the time elapsed since the clock was started.
	 *
	 * \return Time elapsed
	 */
	Time restart();

private:

	/**
	 * Member data
	 */
	Time m_startTime;
};
	
}; // namespace cr

#endif // __CLOCK_H__
