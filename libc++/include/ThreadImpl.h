#ifndef __THREAD_IMPL_H__
#define __THREAD_IMPL_H__

#include <Config.h>
#include <NonCopyable.h>
#include <pthread.h>

/**
 * \brief namespace : cr(CloudRain21) (my private library)
 */
namespace cr
{
class Thread;

namespace priv
{

/**
 * \brief Unix implementation of threads
 */
class ThreadImpl : NonCopyable
{
public:
	/**
	 * \brief Default constructor, lauch the thread
	 *
	 * \param owner The Thread instance to run
	 */
	ThreadImpl(Thread * owner);

	/**
	 * \brief Wait until the thread finishes
	 */
	void wait();

	/**
	 * \brief Terminate the thread
	 */
	void terminate();

private:

	/**
	 * \brief Global entry point for all threads
	 *
	 * \param userData User-defined data (contains the Thread instance)
	 *
	 * \return 0s specific error code
	 */
	static void * entryPoint(void * userData);

	/**
	 * \brief Member data
	 */
	pthread_t m_thread;    /**< pthread thread instance */
	bool      m_isActive;  /**< Thread state (active or inactive) */
};

} // namespace priv

} // namespace cr

#endif // __THREAD_IMPL_H__
